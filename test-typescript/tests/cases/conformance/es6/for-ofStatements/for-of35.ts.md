__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 228,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 187,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 187,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 131,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
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
              "start": 49,
              "end": 131,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 131,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 125,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 69,
                      "end": 125,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 83,
                          "end": 93,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 87,
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
                            "start": 89,
                            "end": 93,
                            "raw": "true",
                            "value": true
                          }
                        },
                        {
                          "type": "Property",
                          "start": 107,
                          "end": 115,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 112,
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
                            "start": 114,
                            "end": 115,
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
            "start": 137,
            "end": 185,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 138,
              "end": 153,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 138,
                "end": 144,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 145,
                "end": 153,
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
              "start": 154,
              "end": 185,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 185,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 167,
                    "end": 179,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 174,
                      "end": 178
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
        "start": 22,
        "end": 38,
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
      "start": 189,
      "end": 228,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 225,
        "end": 228,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 194,
        "end": 199,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 198,
            "end": 199,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
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
        "start": 203,
        "end": 223,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 207,
          "end": 223,
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
