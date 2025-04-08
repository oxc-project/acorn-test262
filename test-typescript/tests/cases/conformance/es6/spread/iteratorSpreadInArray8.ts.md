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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 20,
        "name": "SymbolIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 122,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 70,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 72,
                            "end": 80,
                            "callee": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 78,
                              "name": "Symbol",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 94,
                          "end": 105,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 98,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 100,
                            "end": 105,
                            "value": false,
                            "raw": "false"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
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
      "start": 126,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 135,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "callee": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 160,
                    "name": "SymbolIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
