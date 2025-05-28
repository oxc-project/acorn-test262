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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 178,
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
            "value": {
              "type": "FunctionExpression",
              "start": 94,
              "end": 178,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 132,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 134,
                            "end": 138,
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
                          "start": 152,
                          "end": 161,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 152,
                            "end": 157,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 159,
                            "end": 161,
                            "value": "",
                            "raw": "\"\""
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
            "start": 183,
            "end": 231,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 184,
              "end": 199,
              "object": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 199,
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
              "start": 200,
              "end": 231,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 235,
      "end": 274,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 240,
        "end": 245,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 244,
            "end": 245,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
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
        "start": 249,
        "end": 269,
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 269,
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
        "start": 271,
        "end": 274,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
