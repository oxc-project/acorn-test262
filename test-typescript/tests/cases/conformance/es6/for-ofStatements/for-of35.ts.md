__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 115,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
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
              "start": 33,
              "end": 115,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 115,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 109,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 53,
                      "end": 109,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 67,
                          "end": 77,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 71,
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
                            "start": 73,
                            "end": 77,
                            "raw": "true",
                            "value": true
                          }
                        },
                        {
                          "type": "Property",
                          "start": 91,
                          "end": 99,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 91,
                            "end": 96,
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
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
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
            "start": 121,
            "end": 169,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 122,
              "end": 137,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 122,
                "end": 128,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 129,
                "end": 137,
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
              "start": 138,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 151,
                    "end": 163,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 158,
                      "end": 162
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
        "end": 22,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ForOfStatement",
      "start": 173,
      "end": 212,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 212,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 183,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 182,
            "end": 183,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "NewExpression",
        "start": 187,
        "end": 207,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 191,
          "end": 207,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
