__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 254,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 186,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 37,
        "end": 186,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 131,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
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
              "start": 47,
              "end": 131,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 131,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 60,
                    "end": 125,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 67,
                      "end": 124,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 81,
                          "end": 89,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 86,
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
                            "start": 88,
                            "end": 89,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 103,
                          "end": 114,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 107,
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
                            "start": 109,
                            "end": 114,
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
            "start": 136,
            "end": 184,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 137,
              "end": 152,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 143,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 152,
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
              "start": 153,
              "end": 184,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 184,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 166,
                    "end": 178,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 173,
                      "end": 177
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
        "end": 36,
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
      "start": 188,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 201,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 201,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 195,
                "end": 201
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
      "start": 203,
      "end": 236,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 233,
        "end": 236,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 213,
        "end": 231,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 217,
          "end": 231,
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
