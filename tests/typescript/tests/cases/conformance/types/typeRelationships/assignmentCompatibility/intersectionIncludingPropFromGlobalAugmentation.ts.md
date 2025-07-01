__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 83
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 96,
                    "end": 100
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 103,
                      "end": 111
                    },
                    "start": 103,
                    "end": 111
                  }
                ],
                "start": 96,
                "end": 111
              },
              "start": 94,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 86,
            "end": 112
          }
        ],
        "start": 84,
        "end": 114
      },
      "declare": false,
      "start": 68,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 125
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 133
            },
            "typeArguments": null,
            "start": 128,
            "end": 133
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 146
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 149,
                    "end": 156
                  },
                  "start": 147,
                  "end": 156
                },
                "accessibility": null,
                "static": false,
                "start": 138,
                "end": 156
              }
            ],
            "start": 136,
            "end": 158
          }
        ],
        "start": 128,
        "end": 158
      },
      "declare": false,
      "start": 115,
      "end": 159
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "source",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 187
                },
                "typeArguments": null,
                "start": 182,
                "end": 187
              },
              "start": 180,
              "end": 187
            },
            "start": 174,
            "end": 187
          },
          "init": null,
          "definite": false,
          "start": 174,
          "end": 187
        }
      ],
      "declare": true,
      "start": 160,
      "end": 188
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 208
                },
                "typeArguments": null,
                "start": 203,
                "end": 208
              },
              "start": 201,
              "end": 208
            },
            "start": 195,
            "end": 208
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 222
                },
                "start": 213,
                "end": 222
              }
            ],
            "start": 211,
            "end": 224
          },
          "definite": false,
          "start": 195,
          "end": 224
        }
      ],
      "declare": false,
      "start": 189,
      "end": 225
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 241
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 250
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 259
            },
            "optional": false,
            "computed": false,
            "start": 244,
            "end": 259
          },
          "definite": false,
          "start": 233,
          "end": 259
        }
      ],
      "declare": false,
      "start": 227,
      "end": 260
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "hasOwn",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 273
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 282
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 297
            },
            "optional": false,
            "computed": false,
            "start": 276,
            "end": 297
          },
          "definite": false,
          "start": 267,
          "end": 297
        }
      ],
      "declare": false,
      "start": 261,
      "end": 298
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 355,
      "end": 364
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 68,
  "end": 364
}
```
