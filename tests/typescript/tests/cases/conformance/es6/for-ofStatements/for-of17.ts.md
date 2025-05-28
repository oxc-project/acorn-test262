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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 115,
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
            "value": {
              "type": "FunctionExpression",
              "start": 31,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 70,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 72,
                            "end": 73,
                            "value": 0,
                            "raw": "0"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 87,
                          "end": 98,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 91,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 93,
                            "end": 98,
                            "value": false,
                            "raw": "false"
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
            "start": 120,
            "end": 168,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 121,
              "end": 136,
              "object": {
                "type": "Identifier",
                "start": 121,
                "end": 127,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
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
              "start": 137,
              "end": 168,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "type": "VariableDeclaration",
      "start": 172,
      "end": 186,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 185,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 187,
      "end": 220,
      "await": false,
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
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 215,
          "decorators": [],
          "name": "NumberIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 220,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
