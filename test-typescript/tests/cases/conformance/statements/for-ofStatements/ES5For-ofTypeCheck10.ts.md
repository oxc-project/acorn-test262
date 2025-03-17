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
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 83,
        "name": "MyStringIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 178,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 94,
              "end": 178,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 132,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 134,
                            "end": 138,
                            "value": true,
                            "raw": "true"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 152,
                          "end": 161,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 152,
                            "end": 157,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 159,
                            "end": 161,
                            "value": "",
                            "raw": "\"\""
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
            "start": 183,
            "end": 231,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 184,
              "end": 199,
              "object": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 199,
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
              "start": 200,
              "end": 231,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      "type": "ForOfStatement",
      "start": 235,
      "end": 274,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 240,
        "end": 245,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 244,
            "end": 245,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "name": "v",
              "typeAnnotation": null,
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
      "right": {
        "type": "NewExpression",
        "start": 249,
        "end": 269,
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 269,
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
