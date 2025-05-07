__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 274,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 233,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 178,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
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
              "start": 94,
              "end": 178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 97,
                "end": 178,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 107,
                    "end": 172,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 114,
                      "end": 171,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 128,
                          "end": 138,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 132,
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
                            "start": 134,
                            "end": 138,
                            "raw": "true",
                            "value": true,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 152,
                          "end": 161,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 152,
                            "end": 157,
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
                            "start": 159,
                            "end": 161,
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
            "type": "MethodDefinition",
            "start": 183,
            "end": 231,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 184,
              "end": 199,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 199,
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
              "start": 200,
              "end": 231,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 203,
                "end": 231,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 213,
                    "end": 225,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 220,
                      "end": 224
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
        "start": 67,
        "end": 83,
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
      "start": 235,
      "end": 274,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 271,
        "end": 274,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 240,
        "end": 245,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 244,
            "end": 245,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
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
        "start": 249,
        "end": 269,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 269,
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
