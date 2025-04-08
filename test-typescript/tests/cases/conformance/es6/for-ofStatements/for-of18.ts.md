__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 259,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "name": "MyStringIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 189,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 134,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 134,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 134,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 128,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 69,
                      "end": 127,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 83,
                          "end": 92,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 88,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 90,
                            "end": 92,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 106,
                          "end": 117,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 110,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 112,
                            "end": 117,
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
            "start": 139,
            "end": 187,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 140,
              "end": 155,
              "object": {
                "type": "Identifier",
                "start": 140,
                "end": 146,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 147,
                "end": 155,
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
              "start": 156,
              "end": 187,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 187,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 169,
                    "end": 181,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 176,
                      "end": 180
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
      "start": 191,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 204,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 204,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 204,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 198,
                "end": 204
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
      "start": 206,
      "end": 241,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "NewExpression",
        "start": 216,
        "end": 236,
        "callee": {
          "type": "Identifier",
          "start": 220,
          "end": 236,
          "name": "MyStringIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 238,
        "end": 241,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
