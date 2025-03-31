__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 228,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 187,
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
        "end": 187,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 131,
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
              "end": 131,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 131,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 125,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 69,
                      "end": 125,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 83,
                          "end": 93,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 87,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 89,
                            "end": 93,
                            "value": true,
                            "raw": "true"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 107,
                          "end": 115,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 112,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 115,
                            "name": "v",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            "start": 137,
            "end": 185,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 138,
              "end": 153,
              "object": {
                "type": "Identifier",
                "start": 138,
                "end": 144,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 145,
                "end": 153,
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
              "start": 154,
              "end": 185,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 185,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 167,
                    "end": 179,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 174,
                      "end": 178
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
      "start": 189,
      "end": 228,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 194,
        "end": 199,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 198,
            "end": 199,
            "id": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
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
        "start": 203,
        "end": 223,
        "callee": {
          "type": "Identifier",
          "start": 207,
          "end": 223,
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
        "start": 225,
        "end": 228,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
