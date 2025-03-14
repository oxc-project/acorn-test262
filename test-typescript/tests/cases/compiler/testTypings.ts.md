__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 52,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 30,
            "end": 50,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 39,
              "decorators": [],
              "name": "compareTo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 48,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 47,
                    "end": 48,
                    "typeName": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "IComparable",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 54,
      "end": 119,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "decorators": [],
        "name": "sort",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 102,
          "end": 112,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 107,
            "end": 112,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 109,
              "end": 112,
              "elementType": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 113,
        "end": 118,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 115,
          "end": 118,
          "elementType": {
            "type": "TSTypeReference",
            "start": 115,
            "end": 116,
            "typeName": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 100,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 100,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 97,
                "end": 100,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 98,
                    "end": 99,
                    "typeName": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 97,
                "decorators": [],
                "name": "IComparable",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
