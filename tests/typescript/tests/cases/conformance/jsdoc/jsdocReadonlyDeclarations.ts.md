__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 371,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 199,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 199,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 40,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "value": 6,
              "raw": "6"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 197,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 77,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 197,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 197,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 91,
                    "end": 101,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 91,
                      "end": 101,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 91,
                        "end": 97,
                        "object": {
                          "type": "ThisExpression",
                          "start": 91,
                          "end": 95
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 97,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 181,
                    "end": 191,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 181,
                      "end": 191,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 181,
                        "end": 187,
                        "object": {
                          "type": "ThisExpression",
                          "start": 181,
                          "end": 185
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 187,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 191,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 209,
      "expression": {
        "type": "MemberExpression",
        "start": 200,
        "end": 209,
        "object": {
          "type": "NewExpression",
          "start": 200,
          "end": 207,
          "callee": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 211,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 221,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 224,
        "end": 263,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 251,
            "end": 261,
            "expression": {
              "type": "AssignmentExpression",
              "start": 251,
              "end": 261,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 251,
                "end": 257,
                "object": {
                  "type": "ThisExpression",
                  "start": 251,
                  "end": 255
                },
                "property": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 260,
                "end": 261,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 321,
      "end": 371,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 327,
        "end": 328,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 329,
        "end": 371,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 335,
            "end": 369,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 335,
              "end": 346,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 346,
              "end": 369,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 367,
                "end": 369,
                "body": []
              },
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
