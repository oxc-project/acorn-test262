__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 124,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 122,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 122,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 122,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 44,
                    "end": 116,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 51,
                      "end": 115,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 65,
                          "end": 80,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 70,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "CallExpression",
                            "start": 72,
                            "end": 80,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 78,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 94,
                          "end": 105,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 98,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 100,
                            "end": 105,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
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
        "start": 6,
        "end": 20,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 135,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 138,
            "end": 161,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 139,
                "end": 160,
                "argument": {
                  "type": "NewExpression",
                  "start": 142,
                  "end": 160,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 160,
                    "decorators": [],
                    "name": "SymbolIterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
