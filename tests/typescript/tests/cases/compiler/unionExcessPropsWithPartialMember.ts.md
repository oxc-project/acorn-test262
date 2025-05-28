__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 34,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 24,
              "decorators": [],
              "name": "unused",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 39,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 98,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 81,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 74,
                "end": 80
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 86,
            "end": 96,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 122,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 121,
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 121,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 116,
                "end": 121,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 116,
                    "end": 117,
                    "typeName": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 120,
                    "end": 121,
                    "typeName": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 140,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 139,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 194,
      "expression": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 193,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 142,
          "end": 144,
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 147,
          "end": 193,
          "properties": [
            {
              "type": "SpreadElement",
              "start": 148,
              "end": 152,
              "argument": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 154,
              "end": 192,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSAsExpression",
                "start": 158,
                "end": 191,
                "expression": {
                  "type": "TSAsExpression",
                  "start": 158,
                  "end": 169,
                  "expression": {
                    "type": "Literal",
                    "start": 158,
                    "end": 162,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 166,
                    "end": 169
                  }
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 173,
                  "end": 191,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 173,
                      "end": 179
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 182,
                      "end": 191
                    }
                  ]
                }
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
