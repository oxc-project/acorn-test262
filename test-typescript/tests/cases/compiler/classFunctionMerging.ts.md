__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 147,
  "end": 340,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 147,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "name": "Foo",
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
          "start": 169,
          "end": 178,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 170,
            "end": 178,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 172,
              "end": 178
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
        "start": 179,
        "end": 189,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 181,
          "end": 189,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 181,
            "end": 189,
            "left": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "name": "Inst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 191,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 208,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 215,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 226,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 226,
              "end": 238,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 236,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 236,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 230,
                      "end": 236
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 241,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 262,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 263,
        "end": 297,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 269,
            "end": 295,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 276,
              "end": 295,
              "id": {
                "type": "Identifier",
                "start": 281,
                "end": 285,
                "name": "Inst",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 288,
                "end": 294
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 299,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 320,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 309,
            "end": 320,
            "callee": {
              "type": "Identifier",
              "start": 313,
              "end": 316,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 317,
                "end": 319,
                "value": "",
                "raw": "\"\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 329,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 332,
            "end": 339,
            "callee": {
              "type": "Identifier",
              "start": 332,
              "end": 335,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 336,
                "end": 338,
                "value": 12,
                "raw": "12"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
