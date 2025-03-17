__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 90,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 56,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 56,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 56,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 40,
                    "end": 50,
                    "argument": {
                      "type": "Literal",
                      "start": 47,
                      "end": 49,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 61,
            "end": 88,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 88,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 88,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 77,
                    "end": 86,
                    "argument": {
                      "type": "Literal",
                      "start": 84,
                      "end": 85,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 66,
                "end": 74,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 68,
                  "end": 74
                }
              }
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
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 93,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 114,
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
      "type": "VariableDeclaration",
      "start": 116,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "name": "A",
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
      "type": "VariableDeclaration",
      "start": 126,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 135,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 133,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 135,
                  "name": "C2",
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
      "start": 137,
      "end": 145,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 144,
        "callee": {
          "type": "MemberExpression",
          "start": 137,
          "end": 142,
          "object": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 139,
            "end": 142,
            "name": "bar",
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
      "start": 193,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 193,
        "end": 200,
        "callee": {
          "type": "MemberExpression",
          "start": 193,
          "end": 198,
          "object": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 195,
            "end": 198,
            "name": "bar",
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
      "start": 249,
      "end": 257,
      "expression": {
        "type": "CallExpression",
        "start": 249,
        "end": 256,
        "callee": {
          "type": "MemberExpression",
          "start": 249,
          "end": 254,
          "object": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 251,
            "end": 254,
            "name": "bar",
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
      "start": 267,
      "end": 276,
      "expression": {
        "type": "CallExpression",
        "start": 267,
        "end": 275,
        "callee": {
          "type": "MemberExpression",
          "start": 267,
          "end": 273,
          "object": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 270,
            "end": 273,
            "name": "bar",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
