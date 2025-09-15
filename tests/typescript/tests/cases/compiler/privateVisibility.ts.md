__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pubMeth",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 31,
                          "end": 35
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privMeth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 36,
                          "end": 44
                        },
                        "optional": false,
                        "computed": false,
                        "start": 31,
                        "end": 44
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 31,
                      "end": 46
                    },
                    "directive": null,
                    "start": 31,
                    "end": 47
                  }
                ],
                "start": 30,
                "end": 48
              },
              "expression": false,
              "start": 27,
              "end": 48
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 13,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privMeth",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 66
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 69,
                "end": 71
              },
              "expression": false,
              "start": 66,
              "end": 71
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 50,
            "end": 71
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pubProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 87
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 90,
              "end": 91
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 73,
            "end": 92
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 110
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 113,
              "end": 114
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 94,
            "end": 115
          }
        ],
        "start": 10,
        "end": 117
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 117
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 134
            },
            "typeArguments": null,
            "arguments": [],
            "start": 127,
            "end": 136
          },
          "definite": false,
          "start": 123,
          "end": 136
        }
      ],
      "declare": false,
      "start": 119,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 139
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "privMeth",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 148
          },
          "optional": false,
          "computed": false,
          "start": 138,
          "end": 148
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 138,
        "end": 150
      },
      "directive": null,
      "start": 138,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 172
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "privProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 181
        },
        "optional": false,
        "computed": false,
        "start": 171,
        "end": 181
      },
      "directive": null,
      "start": 171,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pubMeth",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 212
          },
          "optional": false,
          "computed": false,
          "start": 203,
          "end": 212
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 203,
        "end": 214
      },
      "directive": null,
      "start": 203,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 232
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "pubProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 240
        },
        "optional": false,
        "computed": false,
        "start": 231,
        "end": 240
      },
      "directive": null,
      "start": 231,
      "end": 241
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 269
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 290
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pub",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 303
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 306,
                      "end": 307
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 293,
                    "end": 308
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "priv",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 321
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 324,
                      "end": 325
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 309,
                    "end": 326
                  }
                ],
                "start": 291,
                "end": 328
              },
              "abstract": false,
              "declare": false,
              "start": 283,
              "end": 328
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 276,
            "end": 328
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 345
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 348,
                    "end": 349
                  },
                  "definite": false,
                  "start": 344,
                  "end": 349
                }
              ],
              "declare": false,
              "start": 340,
              "end": 350
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 333,
            "end": 350
          }
        ],
        "start": 270,
        "end": 352
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 258,
      "end": 352
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 360
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 368
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 370
              },
              "optional": false,
              "computed": false,
              "start": 367,
              "end": 370
            },
            "typeArguments": null,
            "arguments": [],
            "start": 363,
            "end": 372
          },
          "definite": false,
          "start": 359,
          "end": 372
        }
      ],
      "declare": false,
      "start": 355,
      "end": 373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 375,
          "end": 376
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "pub",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 380
        },
        "optional": false,
        "computed": false,
        "start": 375,
        "end": 380
      },
      "directive": null,
      "start": 375,
      "end": 381
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 397,
          "end": 398
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "priv",
          "optional": false,
          "typeAnnotation": null,
          "start": 399,
          "end": 403
        },
        "optional": false,
        "computed": false,
        "start": 397,
        "end": 403
      },
      "directive": null,
      "start": 397,
      "end": 404
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 424
}
```
