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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 169,
          "end": 178,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 170,
            "end": 178,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 172,
              "end": 178
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "decorators": [],
              "name": "Inst",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 191,
      "end": 240,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 208,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 215,
            "end": 238,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 226,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 226,
              "end": 238,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 236,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 236,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 230,
                      "end": 236
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 241,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 262,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "Inst",
                "optional": false,
                "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 320,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 309,
            "end": 320,
            "callee": {
              "type": "Identifier",
              "start": 313,
              "end": 316,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 317,
                "end": 319,
                "value": "",
                "raw": "\"\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 340,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 329,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 332,
            "end": 339,
            "callee": {
              "type": "Identifier",
              "start": 332,
              "end": 335,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 336,
                "end": 338,
                "value": 12,
                "raw": "12"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
