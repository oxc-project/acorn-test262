__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 190,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 117,
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
              "end": 117,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 117,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 111,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 53,
                      "end": 111,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 67,
                          "end": 78,
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
                            "end": 78,
                            "raw": "false",
                            "value": false,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 92,
                          "end": 101,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 97,
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
                            "type": "Literal",
                            "start": 99,
                            "end": 101,
                            "raw": "\"\"",
                            "value": "",
                            "regex": null,
                            "bigint": null
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
            "type": "PropertyDefinition",
            "start": 123,
            "end": 134,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 129,
              "decorators": [],
              "name": "return",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 132,
              "end": 133,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 140,
            "end": 188,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 141,
              "end": 156,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 148,
                "end": 156,
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
              "start": 157,
              "end": 188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 160,
                "end": 188,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 170,
                    "end": 182,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 177,
                      "end": 181
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
      "start": 192,
      "end": 231,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 228,
        "end": 231,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 197,
        "end": 202,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 201,
            "end": 202,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
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
        "start": 206,
        "end": 226,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 210,
          "end": 226,
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
