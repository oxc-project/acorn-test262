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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 12,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 58,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 56,
            "computed": true,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 31,
              "end": 46,
              "object": {
                "type": "Identifier",
                "start": 31,
                "end": 37,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 38,
                "end": 46,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "TSDeclareFunction",
      "start": 60,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 81,
          "end": 85,
          "name": "i",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 85,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 84,
              "end": 85,
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 86,
        "end": 89,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 88,
          "end": 89,
          "typeName": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 91,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 111,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 112,
          "end": 118,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 118,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 115,
              "end": 118
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 119,
        "end": 124,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 121,
          "end": 124
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 127,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 148,
          "end": 152,
          "name": "i",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 149,
            "end": 152,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 152,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 153,
        "end": 156,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 155,
          "end": 156,
          "typeName": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 158,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 178,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 179,
          "end": 185,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 180,
            "end": 185,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 182,
              "end": 185
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 186,
        "end": 191,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 188,
          "end": 191
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 205,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 204,
        "callee": {
          "type": "Identifier",
          "start": 194,
          "end": 197,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 198,
            "end": 203,
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 214,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 214,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 223,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 222,
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 219,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
