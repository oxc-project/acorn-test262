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
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 36,
        "name": "NumberIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 37,
        "end": 186,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 131,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 131,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 86,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 88,
                            "end": 89,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 103,
                          "end": 114,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 107,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 109,
                            "end": 114,
                            "value": false,
                            "raw": "false"
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
            "start": 136,
            "end": 184,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 137,
              "end": 152,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 143,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 152,
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
              "start": 153,
              "end": 184,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      "start": 188,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 201,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 201,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 195,
                "end": 201
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 203,
      "end": 236,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "NewExpression",
        "start": 213,
        "end": 231,
        "callee": {
          "type": "Identifier",
          "start": 217,
          "end": 231,
          "name": "NumberIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 233,
        "end": 236,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
