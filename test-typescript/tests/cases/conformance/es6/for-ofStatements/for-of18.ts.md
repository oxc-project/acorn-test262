__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 173,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 118,
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
              "end": 118,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 118,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 112,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 53,
                      "end": 111,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 67,
                          "end": 76,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 72,
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
                            "start": 74,
                            "end": 76,
                            "raw": "\"\"",
                            "value": "",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 90,
                          "end": 101,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 94,
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
                            "start": 96,
                            "end": 101,
                            "raw": "false",
                            "value": false,
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
            "type": "MethodDefinition",
            "start": 123,
            "end": 171,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 124,
              "end": 139,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 124,
                "end": 130,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 131,
                "end": 139,
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
              "start": 140,
              "end": 171,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 165,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 160,
                      "end": 164
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
      "type": "VariableDeclaration",
      "start": 175,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 188,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 188,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 182,
                "end": 188
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 190,
      "end": 225,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 222,
        "end": 225,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 200,
        "end": 220,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 204,
          "end": 220,
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
