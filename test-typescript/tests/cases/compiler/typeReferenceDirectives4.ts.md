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
  "end": 30,
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
  "start": 82,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 90,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "$",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 100,
            "end": 107,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
