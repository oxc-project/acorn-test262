__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "decorators": [],
            "name": "method3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 48,
            "raw": "\"method3\"",
            "value": "method3"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 85,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 65,
                "end": 72,
                "expression": {
                  "type": "CallExpression",
                  "start": 66,
                  "end": 72,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 70,
                      "end": 71,
                      "raw": "1",
                      "value": 1
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 69,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 80,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 85,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 114,
            "accessibility": null,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 90,
                "end": 97,
                "expression": {
                  "type": "CallExpression",
                  "start": 91,
                  "end": 97,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 95,
                      "end": 96,
                      "raw": "2",
                      "value": 2
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 94,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 99,
              "end": 108,
              "raw": "\"method2\"",
              "value": "method2"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 114,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 114,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 141,
            "accessibility": null,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 119,
                "end": 126,
                "expression": {
                  "type": "CallExpression",
                  "start": 120,
                  "end": 126,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 124,
                      "end": 125,
                      "raw": "3",
                      "value": 3
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 123,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 135,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 139,
                "end": 141,
                "body": []
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
        "start": 57,
        "end": 58,
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
