__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 21,
            "arguments": [
              {
                "type": "Literal",
                "start": 17,
                "end": 20,
                "raw": "\"x\"",
                "value": "x",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 16,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 33,
            "end": 44,
            "arguments": [
              {
                "type": "Literal",
                "start": 40,
                "end": 43,
                "raw": "\"y\"",
                "value": "y",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 175,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 175,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 80,
            "accessibility": "private",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 73,
                "end": 79
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 105,
            "accessibility": "private",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 98,
                "end": 104
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 173,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 173,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 173,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 124,
                    "end": 136,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 124,
                      "end": 135,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 131,
                        "computed": true,
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 134,
                        "end": 135,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 159,
                    "end": 167,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 159,
                      "end": 166,
                      "computed": true,
                      "object": {
                        "type": "ThisExpression",
                        "start": 159,
                        "end": 163
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
