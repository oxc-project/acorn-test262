__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 20,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 19,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 17,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 17,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 14,
                "end": 17,
                "literal": {
                  "type": "Literal",
                  "start": 14,
                  "end": 17,
                  "raw": "'x'",
                  "value": "x"
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 21,
      "end": 41,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 30,
        "end": 40,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 35,
                "end": 38,
                "literal": {
                  "type": "Literal",
                  "start": 35,
                  "end": 38,
                  "raw": "'y'",
                  "value": "y"
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 71,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 71,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 62,
                "end": 71,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 62,
                    "end": 65,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 62,
                      "end": 63,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 68,
                    "end": 71,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 69,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null
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
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 74,
      "end": 125,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 125,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 104,
            "end": 111,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 104,
              "end": 110,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 104,
                "end": 108,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 116,
            "end": 123,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 116,
              "end": 122,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 116,
                "end": 120,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 79,
        "end": 89,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 85,
            "end": 89,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 89,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "decorators": [],
        "name": "arr",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
