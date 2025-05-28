__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 180,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 22,
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
        "start": 23,
        "end": 180,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 124,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 124,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 124,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 118,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 53,
                      "end": 118,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 99,
                          "end": 108,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 104,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 106,
                            "end": 108,
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
            "start": 130,
            "end": 178,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 131,
              "end": 146,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 137,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 138,
                "end": 146,
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
              "start": 147,
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
                "start": 150,
                "end": 178,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 160,
                    "end": 172,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 167,
                      "end": 171
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
      "start": 182,
      "end": 221,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 187,
        "end": 192,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 191,
            "end": 192,
            "id": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
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
        "start": 196,
        "end": 216,
        "callee": {
          "type": "Identifier",
          "start": 200,
          "end": 216,
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
        "start": 218,
        "end": 221,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
