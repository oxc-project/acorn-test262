__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 12,
      "end": 58,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 58,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 56,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 31,
              "end": 46,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 31,
                "end": 37,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 38,
                "end": 46,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 50,
                "end": 55,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 52,
                    "end": 53,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 60,
      "end": 90,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 81,
          "end": 85,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 85,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 84,
              "end": 85,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 86,
        "end": 89,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 88,
          "end": 89,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 91,
      "end": 125,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 111,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 112,
          "end": 118,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 118,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 115,
              "end": 118
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 119,
        "end": 124,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 121,
          "end": 124
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 127,
      "end": 157,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 148,
          "end": 152,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 149,
            "end": 152,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 152,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 153,
        "end": 156,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 155,
          "end": 156,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 158,
      "end": 192,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 178,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 179,
          "end": 185,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 180,
            "end": 185,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 182,
              "end": 185
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 186,
        "end": 191,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 188,
          "end": 191
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 205,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 204,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 198,
            "end": 203,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 194,
          "end": 197,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 214,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 214,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 223,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 222,
        "arguments": [
          {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 219,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
