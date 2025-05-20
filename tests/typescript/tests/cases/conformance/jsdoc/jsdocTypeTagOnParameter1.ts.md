__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 319,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 187,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 187,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 141,
            "end": 185,
            "argument": {
              "type": "CallExpression",
              "start": 148,
              "end": 184,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 180,
                  "end": 183,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 180,
                      "end": 183,
                      "tail": true,
                      "value": {
                        "cooked": " ",
                        "raw": " "
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 148,
                "end": 179,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 148,
                  "end": 174,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 166,
                      "end": 173,
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 148,
                    "end": 165,
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "start": 148,
                      "end": 160,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 154,
                          "end": 159,
                          "decorators": [],
                          "name": "times",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 153,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 165,
                      "decorators": [],
                      "name": "fill",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 179,
                  "decorators": [],
                  "name": "join",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 72,
        "decorators": [],
        "name": "repeat",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 97,
          "end": 104,
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 129,
          "end": 134,
          "decorators": [],
          "name": "times",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 256,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 246,
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 249,
            "end": 256,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 249,
                "end": 256,
                "tail": true,
                "value": {
                  "cooked": "hello",
                  "raw": "hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 314,
            "decorators": [],
            "name": "times",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 317,
            "end": 318,
            "raw": "3",
            "value": 3
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
