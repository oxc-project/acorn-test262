__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 190,
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
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 117,
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
              "end": 117,
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
                "end": 117,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 111,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 53,
                      "end": 111,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 67,
                          "end": 78,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 71,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 73,
                            "end": 78,
                            "value": false,
                            "raw": "false"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 92,
                          "end": 101,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 97,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 99,
                            "end": 101,
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
            "type": "PropertyDefinition",
            "start": 123,
            "end": 134,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 129,
              "decorators": [],
              "name": "return",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 132,
              "end": 133,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 140,
            "end": 188,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 141,
              "end": 156,
              "object": {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 148,
                "end": 156,
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
              "start": 157,
              "end": 188,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 160,
                "end": 188,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 170,
                    "end": 182,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 177,
                      "end": 181
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
      "start": 192,
      "end": 231,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 197,
        "end": 202,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 201,
            "end": 202,
            "id": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
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
        "start": 206,
        "end": 226,
        "callee": {
          "type": "Identifier",
          "start": 210,
          "end": 226,
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
        "start": 228,
        "end": 231,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
