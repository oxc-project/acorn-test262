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
        "end": 153,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 97,
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
              "end": 97,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
          },
          {
            "type": "MethodDefinition",
            "start": 103,
            "end": 151,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 104,
              "end": 119,
              "object": {
                "type": "Identifier",
                "start": 104,
                "end": 110,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 111,
                "end": 119,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 151,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      "start": 155,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 164,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "callee": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 189,
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
