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
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 83,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 84,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 86,
            "end": 112,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 94,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "value": "string",
                      "raw": "'string'"
                    }
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
      "type": "TSTypeAliasDeclaration",
      "start": 115,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 125,
        "name": "Test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 128,
        "end": 158,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 128,
            "end": 133,
            "typeName": {
              "type": "Identifier",
              "start": 128,
              "end": 133,
              "name": "Test1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 146,
                  "name": "optional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 147,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 149,
                    "end": 156
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 187,
            "name": "source",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 187,
                "typeName": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 187,
                  "name": "Test1",
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
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 208,
            "name": "target",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 208,
                  "name": "Test2",
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
                  "name": "source",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 241,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 244,
            "end": 259,
            "object": {
              "type": "Identifier",
              "start": 244,
              "end": 250,
              "name": "target",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 251,
              "end": 259,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 273,
            "name": "hasOwn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 276,
            "end": 297,
            "object": {
              "type": "Identifier",
              "start": 276,
              "end": 282,
              "name": "target",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 283,
              "end": 297,
              "name": "hasOwnProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 355,
      "end": 364,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
