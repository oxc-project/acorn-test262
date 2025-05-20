__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 153,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 153,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 97,
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
              "end": 97,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 97,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 44,
                    "end": 91,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 51,
                      "end": 90,
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
            "start": 103,
            "end": 151,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 104,
              "end": 119,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 104,
                "end": 110,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 111,
                "end": 119,
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
              "start": 120,
              "end": 151,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 151,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 133,
                    "end": 145,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 140,
                      "end": 144
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
      "start": 155,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 164,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 167,
            "end": 190,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 168,
                "end": 189,
                "argument": {
                  "type": "NewExpression",
                  "start": 171,
                  "end": 189,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 189,
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
