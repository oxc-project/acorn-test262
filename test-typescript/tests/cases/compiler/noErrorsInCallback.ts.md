__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 51,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 51,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 28,
                  "end": 46,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 46,
                    "name": "foo",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 40,
                        "end": 46
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 51,
                "body": []
              },
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
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 64,
            "end": 75,
            "callee": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 72,
                "end": 74,
                "properties": []
              }
            ],
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
      "start": 86,
      "end": 148,
      "expression": {
        "type": "CallExpression",
        "start": 86,
        "end": 147,
        "callee": {
          "type": "MemberExpression",
          "start": 86,
          "end": 96,
          "object": {
            "type": "ArrayExpression",
            "start": 86,
            "end": 88,
            "elements": []
          },
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 96,
            "name": "forEach",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 97,
            "end": 146,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 103,
              "end": 146,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 109,
                  "end": 131,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 113,
                      "end": 130,
                      "id": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 116,
                        "name": "two",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "NewExpression",
                        "start": 119,
                        "end": 130,
                        "callee": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 126,
                          "name": "Bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 127,
                            "end": 129,
                            "properties": []
                          }
                        ],
                        "typeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
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
