__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 365,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 114,
      "body": {
        "type": "TSInterfaceBody",
        "start": 84,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 86,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 94,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 111,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 96,
                "end": 111,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 96,
                    "end": 100
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 103,
                    "end": 111,
                    "literal": {
                      "type": "Literal",
                      "start": 103,
                      "end": 111,
                      "raw": "'string'",
                      "value": "string"
                    }
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
        "start": 78,
        "end": 83,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 115,
      "end": 159,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 125,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 128,
        "end": 158,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 128,
            "end": 133,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 128,
              "end": 133,
              "decorators": [],
              "name": "Test1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 136,
            "end": 158,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 138,
                "end": 156,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 146,
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 147,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 149,
                    "end": 156
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 187,
            "decorators": [],
            "name": "source",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 187,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 187,
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "VariableDeclaration",
      "start": 189,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 208,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 208,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 208,
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 211,
            "end": 224,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 213,
                "end": 222,
                "argument": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 222,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 241,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 244,
            "end": 259,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 244,
              "end": 250,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 251,
              "end": 259,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 297,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 273,
            "decorators": [],
            "name": "hasOwn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 276,
            "end": 297,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 276,
              "end": 282,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 283,
              "end": 297,
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 355,
      "end": 364,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
