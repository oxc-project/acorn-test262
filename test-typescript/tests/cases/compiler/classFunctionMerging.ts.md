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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
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
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "decorators": [],
              "name": "Inst",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 191,
      "end": 240,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 215,
            "end": 238,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 226,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 226,
              "end": 238,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 208,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 241,
      "end": 297,
      "body": {
        "type": "TSModuleBlock",
        "start": 263,
        "end": 297,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 269,
            "end": 295,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 276,
              "end": 295,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 281,
                "end": 285,
                "decorators": [],
                "name": "Inst",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 288,
                "end": 294
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 262,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "namespace"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 309,
            "end": 320,
            "arguments": [
              {
                "type": "Literal",
                "start": 317,
                "end": 319,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 313,
              "end": 316,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 329,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 332,
            "end": 339,
            "arguments": [
              {
                "type": "Literal",
                "start": 336,
                "end": 338,
                "raw": "12",
                "value": 12
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 332,
              "end": 335,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
