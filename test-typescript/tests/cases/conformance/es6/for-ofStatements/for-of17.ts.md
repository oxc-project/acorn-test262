__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 238,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 115,
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
              "end": 115,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 115,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 44,
                    "end": 109,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 51,
                      "end": 108,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 65,
                          "end": 73,
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
                            "type": "Literal",
                            "start": 72,
                            "end": 73,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 87,
                          "end": 98,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 91,
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
                            "start": 93,
                            "end": 98,
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
            "start": 120,
            "end": 168,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 121,
              "end": 136,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 121,
                "end": 127,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
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
              "start": 137,
              "end": 168,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 140,
                "end": 168,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 150,
                    "end": 162,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 157,
                      "end": 161
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
        "name": "NumberIterator",
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
      "start": 172,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 185,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
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
      "start": 187,
      "end": 220,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 220,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 197,
        "end": 215,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 215,
          "decorators": [],
          "name": "NumberIterator",
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
