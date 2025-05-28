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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 115,
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
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 115,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 71,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 73,
                            "end": 77,
                            "value": true,
                            "raw": "true"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 91,
                          "end": 99,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 91,
                            "end": 96,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 169,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 122,
              "end": 137,
              "object": {
                "type": "Identifier",
                "start": 122,
                "end": 128,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 129,
                "end": 137,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 169,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 173,
      "end": 212,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 183,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 182,
            "end": 183,
            "id": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "NewExpression",
        "start": 187,
        "end": 207,
        "callee": {
          "type": "Identifier",
          "start": 191,
          "end": 207,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 212,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
