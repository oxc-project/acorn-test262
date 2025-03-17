__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 422,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 117,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "name": "pubMeth",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 48,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 31,
                    "end": 47,
                    "expression": {
                      "type": "CallExpression",
                      "start": 31,
                      "end": 46,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 31,
                        "end": 44,
                        "object": {
                          "type": "ThisExpression",
                          "start": 31,
                          "end": 35
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 44,
                          "name": "privMeth",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 71,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 66,
              "name": "privMeth",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 71,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 71,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 92,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 87,
              "name": "pubProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 90,
              "end": 91,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 115,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 110,
              "name": "privProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 113,
              "end": 114,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 127,
            "end": 136,
            "callee": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 151,
      "expression": {
        "type": "CallExpression",
        "start": 138,
        "end": 150,
        "callee": {
          "type": "MemberExpression",
          "start": 138,
          "end": 148,
          "object": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 140,
            "end": 148,
            "name": "privMeth",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 171,
      "end": 182,
      "expression": {
        "type": "MemberExpression",
        "start": 171,
        "end": 181,
        "object": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 173,
          "end": 181,
          "name": "privProp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 215,
      "expression": {
        "type": "CallExpression",
        "start": 203,
        "end": 214,
        "callee": {
          "type": "MemberExpression",
          "start": 203,
          "end": 212,
          "object": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 205,
            "end": 212,
            "name": "pubMeth",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 241,
      "expression": {
        "type": "MemberExpression",
        "start": 231,
        "end": 240,
        "object": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 233,
          "end": 240,
          "name": "pubProp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 258,
      "end": 349,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 266,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 267,
        "end": 349,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 273,
            "end": 325,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 280,
              "end": 325,
              "id": {
                "type": "Identifier",
                "start": 286,
                "end": 287,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 288,
                "end": 325,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 290,
                    "end": 305,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 300,
                      "name": "pub",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 303,
                      "end": 304,
                      "value": 0,
                      "raw": "0"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 306,
                    "end": 323,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 318,
                      "name": "priv",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 321,
                      "end": 322,
                      "value": 1,
                      "raw": "1"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 330,
            "end": 347,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 337,
              "end": 347,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 341,
                  "end": 346,
                  "id": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 345,
                    "end": 346,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 356,
          "end": 369,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 357,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 360,
            "end": 369,
            "callee": {
              "type": "MemberExpression",
              "start": 364,
              "end": 367,
              "object": {
                "type": "Identifier",
                "start": 364,
                "end": 365,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 366,
                "end": 367,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 372,
      "end": 378,
      "expression": {
        "type": "MemberExpression",
        "start": 372,
        "end": 377,
        "object": {
          "type": "Identifier",
          "start": 372,
          "end": 373,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 374,
          "end": 377,
          "name": "pub",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 401,
      "expression": {
        "type": "MemberExpression",
        "start": 394,
        "end": 400,
        "object": {
          "type": "Identifier",
          "start": 394,
          "end": 395,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 396,
          "end": 400,
          "name": "priv",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
