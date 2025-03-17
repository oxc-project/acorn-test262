__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 237,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 196,
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
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 140,
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
              "end": 140,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 140,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 134,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 69,
                      "end": 134,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 115,
                          "end": 124,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 120,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 122,
                            "end": 124,
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
            "start": 146,
            "end": 194,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 147,
              "end": 162,
              "object": {
                "type": "Identifier",
                "start": 147,
                "end": 153,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 162,
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
              "start": 163,
              "end": 194,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 194,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 176,
                    "end": 188,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 183,
                      "end": 187
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
      "start": 198,
      "end": 237,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 203,
        "end": 208,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 207,
            "end": 208,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
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
        "start": 212,
        "end": 232,
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 232,
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
        "start": 234,
        "end": 237,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
