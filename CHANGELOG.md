# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.1.0](https://github.com/modum-io/noble2/compare/v0.0.3...v0.1.0) (2020-11-03)

### ⚠ BREAKING CHANGES

- Rename package
- **hci:** Change disconnect return value

### Features

- Update dependencies ([3adf744](https://github.com/modum-io/noble2/commit/3adf744bb097f103df3899c6fab6c5a5f3a8eec6))
- **hci:** Rework hci interface ([bade296](https://github.com/modum-io/noble2/commit/bade296fe5faeec291db95ae7d2a9cfcee06ba41))

### [0.0.3](https://github.com/modum-io/noble2/compare/v0.0.2...v0.0.3) (2020-09-29)

### 0.0.2 (2020-09-29)

### Features

- Add access to discovered things ([7882e49](https://github.com/modum-io/noble2/commit/7882e49c8b9aa97476c340c13355a4e91b0c63d4))
- Add better typings ([2907e60](https://github.com/modum-io/noble2/commit/2907e607c0e45c068fdf2a8952deb8f00e10e1ba))
- Add dbus support [WIP] ([5a83e93](https://github.com/modum-io/noble2/commit/5a83e93472374fe8552d6e178409cd41deddfc38))
- Add deviceId selection to init ([c969615](https://github.com/modum-io/noble2/commit/c969615c7bc3252ebb9dae240bc2642072b80ba4))
- Add dipose methods ([0f27d82](https://github.com/modum-io/noble2/commit/0f27d825d3d8332736aad9bbcd7b77729541e98b))
- Expose adapter list on noble ([9c48bf8](https://github.com/modum-io/noble2/commit/9c48bf81ff81dfc33fa40de7a7e42c00be36f28f))
- First rework test ([cb69841](https://github.com/modum-io/noble2/commit/cb698418e87642c628efdbcc1cd5087fe771ce40))
- Fix dbus issues ([2371f8e](https://github.com/modum-io/noble2/commit/2371f8e05b44d3581cc7a1b406af6df75caa727d))
- Improve connection handling ([1be8de7](https://github.com/modum-io/noble2/commit/1be8de7ad6216399a4d7c565b0d17c46b20b0bd6))
- Improve gatt class ([c997d6d](https://github.com/modum-io/noble2/commit/c997d6d5f5d46ab72dba825666c4c33e838b4d42))
- Rework bindings ([c606c01](https://github.com/modum-io/noble2/commit/c606c01729099b63bae83bae1c0544f71197b627))

### Bug Fixes

- Add connection timeout ([513f74b](https://github.com/modum-io/noble2/commit/513f74b3c724505004f7ae72459023273a5667be))
- Add hci adapter cleanup ([244420b](https://github.com/modum-io/noble2/commit/244420b6827b79db8acd82fbc30b65856e00c8a8))
- Add known services, characteristics & descriptors ([8d1a257](https://github.com/modum-io/noble2/commit/8d1a2575e8e00b4f2b10dae09a948cbf5edc1af4))
- Add more logs while connecting ([1d56a35](https://github.com/modum-io/noble2/commit/1d56a3517c1d27ec059c0248e0281875142550f0))
- Add more typings ([539cba3](https://github.com/modum-io/noble2/commit/539cba30842e7e2f65b17ff6c709dbdcd80c0420))
- Add stop scan to tests ([de28850](https://github.com/modum-io/noble2/commit/de288504078371c087dc06bc5078485c92694850))
- Add timeout to init ([c238ce0](https://github.com/modum-io/noble2/commit/c238ce0cbb748568ac6559ffdf5b5e5af237101e))
- Add transpiled files ([e2a2d2d](https://github.com/modum-io/noble2/commit/e2a2d2d58b88400728d117ee9bc9f64485a5d80c))
- Add transpiled files ([e318a56](https://github.com/modum-io/noble2/commit/e318a56f76fb16b926e7f51f8b72d06406698a6e))
- Add transpiled files ([26cd9e8](https://github.com/modum-io/noble2/commit/26cd9e81fa9c30d89ce2d80cc302e9662ce081eb))
- Add transpiled files ([4ecf310](https://github.com/modum-io/noble2/commit/4ecf3102063c1e12ef6f1c6e25a12f6d24211d7f))
- Add transpiled files ([cb2f8db](https://github.com/modum-io/noble2/commit/cb2f8dbb1f2d8661ddbb8b43e7a953c01c767717))
- Assume default noble multi role ([7f8a94c](https://github.com/modum-io/noble2/commit/7f8a94c49b74ffe42505a13d64db141398b73986))
- Catch disconnect during connect ([6e690f7](https://github.com/modum-io/noble2/commit/6e690f794cfb869effbb4b2ee943b791bd5709ec))
- Change characteristic discover ([dbc9fdf](https://github.com/modum-io/noble2/commit/dbc9fdf9a7db607ea2335ebd8c3c9accdbda0a26))
- Change default exports ([eafe9df](https://github.com/modum-io/noble2/commit/eafe9df801320b2f23d0d836c397db2c44707f85))
- Correctly dispose peripheral ([d168201](https://github.com/modum-io/noble2/commit/d168201f1de30a6f4015ca328e78846c53e81f44))
- Correctly type function ([187f93e](https://github.com/modum-io/noble2/commit/187f93edc042675e57ba963841dd9d57539e4780))
- Fix adapter address change ([a16918e](https://github.com/modum-io/noble2/commit/a16918e2e376c1b100748d4dbcdb4bf06e5a3bf9))
- Fix adapter init ([d83daee](https://github.com/modum-io/noble2/commit/d83daee08b47da0c3c6152e6fa93457ed31619a7))
- Fix adapter power up ([e807d8b](https://github.com/modum-io/noble2/commit/e807d8b27d41a9d38d600be77cc4e1f8f95c3692))
- Fix adapter startup ([0ee5b5b](https://github.com/modum-io/noble2/commit/0ee5b5b9433b69cff45788054fb63ecb4cbc4495))
- Fix connection processing after disconnect ([d22d2bf](https://github.com/modum-io/noble2/commit/d22d2bfedffc7271bb7f0bba9084fb73e113b50a))
- Fix dbus adapter scan ([eeda964](https://github.com/modum-io/noble2/commit/eeda964bc54e6d951f3bbfc0bb75dd6f673d28e2))
- Fix dbus scanning not working ([7f92f9e](https://github.com/modum-io/noble2/commit/7f92f9ea8b3ce32127a269540ff1e4df430bd02d))
- Fix discovering services ([6338fc8](https://github.com/modum-io/noble2/commit/6338fc896b98f71e39c482254578a699575baf64))
- Fix hci cancel connection command length ([d6edf39](https://github.com/modum-io/noble2/commit/d6edf3904fc184decce58091c91ee1405a80a402))
- Fix hci supervision timeout ([a50cc09](https://github.com/modum-io/noble2/commit/a50cc098b86bed1dd065e24890b3d1b06a23aa8e))
- Fix missing hci status ([2257088](https://github.com/modum-io/noble2/commit/2257088ce36acb37f9c339b0c49d8b6a0e2a4be5))
- Fix not passing on acl data ([7bf04db](https://github.com/modum-io/noble2/commit/7bf04dbccf49bd6650741b66d27953781d3a618e))
- Fix peripheral state ([48d6d51](https://github.com/modum-io/noble2/commit/48d6d517c6d03f62eb8d18b5e0cf0be8fb0adc5c))
- Fix peripheral typings ([91c5521](https://github.com/modum-io/noble2/commit/91c55211bed30ee622e40ed7566ad945f7f4b1b8))
- Fix processing connections after disconnect ([3da6ae4](https://github.com/modum-io/noble2/commit/3da6ae4ce516f37e8d0ca34ffbed1ea1a701ff1b))
- Fix registering multiple handlers on connect ([914b041](https://github.com/modum-io/noble2/commit/914b04166365119792b3a9b1851d5fdf5a1b45bc))
- Fix stuff ([7470826](https://github.com/modum-io/noble2/commit/74708266805e8e222236ee663fd34e691b74c598))
- Fix wrong event return types ([28ce48c](https://github.com/modum-io/noble2/commit/28ce48c88853d87d2cb695ae16ee0b943ba197f9))
- Improve adapter scan resume ([ac8e73b](https://github.com/modum-io/noble2/commit/ac8e73b182f2c5a994c4dfc0c0f6d747b463939f))
- Improve connect behaviour ([87f4bcf](https://github.com/modum-io/noble2/commit/87f4bcf363c074ce3240bddd378e8b562bc54c6e))
- Make state public ([87846a8](https://github.com/modum-io/noble2/commit/87846a82ae78bdeaa4bc64ab8e9e29ad2875ee5a))
- More cleanup fixes ([a3b7c89](https://github.com/modum-io/noble2/commit/a3b7c89614a25713f5a16936296651fb9bf4fb16))
- Move bindings ([093a786](https://github.com/modum-io/noble2/commit/093a786d6ebe891945ad61f6b303eca2f69ea80a))
- Possible fixes for connecting ([e59e593](https://github.com/modum-io/noble2/commit/e59e5933767d3a678363e8f8330ee196d855f026))
- Properly dispose signaling ([afde346](https://github.com/modum-io/noble2/commit/afde346da41a15fc544d68145fbe9aeea7135124))
- Properly implement mtu exchange ([df70614](https://github.com/modum-io/noble2/commit/df7061442741f04441e6b818a38a47a9bb3e7f07))
- Reject after connection error ([7cffc52](https://github.com/modum-io/noble2/commit/7cffc526b13c43513d56e741b7bbfd61701cb914))
- Remove disconnect error handler after connect ([0e5d7ef](https://github.com/modum-io/noble2/commit/0e5d7ef882c4b37e17809cfcb384eb6f969dee5b))
- Remove unused code ([4e00921](https://github.com/modum-io/noble2/commit/4e009214e5334d17f0e42be2c2e5c943406fadbf))
- Wording ([cd23c01](https://github.com/modum-io/noble2/commit/cd23c0137b2105fa9dc23573987b82d84d5e7319))
- **adapter:** Fix restarting scan after connect ([51daa08](https://github.com/modum-io/noble2/commit/51daa080887caeba75835fcfce8a04c0041bf438))
- **adapter:** Fix scanning restart ([48fab1b](https://github.com/modum-io/noble2/commit/48fab1b4a07e3cf290d2944b18c3cbaa47acfa3f))
- **hci:** Fix address being lowercase ([6df4453](https://github.com/modum-io/noble2/commit/6df4453432024d596b1d8e6bf0ec3e6cd06f53e9))
- Rework discover services ([903bbce](https://github.com/modum-io/noble2/commit/903bbce6e5d38b57337705030b1b6fd966a687a2))
- **adapter:** Fix restarting scan ([7d510c8](https://github.com/modum-io/noble2/commit/7d510c826d19ef5824dcec2face5c15d1967d5f6))
- **adapter:** Fix start & stop scanning ([14754c1](https://github.com/modum-io/noble2/commit/14754c19b4ae1e2b4b1cf29a906d800c622572d3))
- Restructure exports ([6c102bf](https://github.com/modum-io/noble2/commit/6c102bf58ddf0cd635256c617ffdeb0b36ebf880))
- Support not setting timeout ([b1f2f39](https://github.com/modum-io/noble2/commit/b1f2f393f8b1c0ff740629d12c14144b6b875207))