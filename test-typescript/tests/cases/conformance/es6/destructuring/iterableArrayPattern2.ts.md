__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 178,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 178,
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
          },
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 176,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 129,
              "end": 144,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 129,
                "end": 135,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 136,
                "end": 144,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 176,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 158,
                    "end": 170,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 165,
                      "end": 169
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
      "start": 180,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 214,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 184,
            "end": 193,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "RestElement",
                "start": 188,
                "end": 192,
                "argument": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 196,
            "end": 214,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 200,
              "end": 214,
              "decorators": [],
              "name": "SymbolIterator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
