__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 50,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 27,
            "end": 48,
            "body": {
              "type": "TSInterfaceBody",
              "start": 41,
              "end": 48,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "Dep",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 20,
        "decorators": [],
        "name": "NS",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 31,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 31,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Src",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 21,
          "end": 27,
          "expression": {
            "type": "MemberExpression",
            "start": 21,
            "end": 27,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "NS",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "Dep",
              "optional": false
            }
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
