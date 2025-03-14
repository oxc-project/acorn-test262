__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 69,
  "end": 87,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 69,
      "end": 86,
      "body": {
        "type": "TSInterfaceBody",
        "start": 81,
        "end": 86,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 83,
            "end": 84,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "$",
        "optional": false
      }
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
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 28,
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 15,
                "end": 28,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 17,
                    "end": 26,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 18,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 18,
                      "end": 26,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 20,
                        "end": 26
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
  "start": 80,
  "end": 110,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 110,
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 108,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 108,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 101,
                "end": 108,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 108,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 107,
                    "end": 108,
                    "typeName": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "decorators": [],
                      "name": "$",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
