__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 287,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 120,
      "expression": {
        "type": "AssignmentExpression",
        "start": 17,
        "end": 120,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 17,
          "end": 28,
          "object": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "name": "prototype",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 31,
          "end": 120,
          "properties": [
            {
              "type": "Property",
              "start": 35,
              "end": 40,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 35,
                "end": 37,
                "name": "x"
              },
              "value": {
                "type": "Literal",
                "start": 39,
                "end": 40,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 61,
              "end": 68,
              "method": true,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 61,
                "end": 63,
                "name": "m"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 63,
                "end": 68,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 66,
                  "end": 68,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 87,
              "end": 109,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 91,
                "end": 93,
                "name": "p"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 93,
                "end": 109,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 96,
                  "end": 109,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 98,
                      "end": 107,
                      "argument": {
                        "type": "Literal",
                        "start": 105,
                        "end": 107,
                        "value": "",
                        "raw": "\"\""
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "kind": "get",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 132,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 236,
      "expression": {
        "type": "AssignmentExpression",
        "start": 133,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 133,
          "end": 144,
          "object": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 144,
            "name": "prototype",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 147,
          "end": 236,
          "properties": [
            {
              "type": "Property",
              "start": 151,
              "end": 156,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 151,
                "end": 153,
                "name": "y"
              },
              "value": {
                "type": "Literal",
                "start": 155,
                "end": 156,
                "value": 2,
                "raw": "2"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 177,
              "end": 184,
              "method": true,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 177,
                "end": 179,
                "name": "m"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 179,
                "end": 184,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 182,
                  "end": 184,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 203,
              "end": 225,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 207,
                "end": 209,
                "name": "p"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 209,
                "end": 225,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 212,
                  "end": 225,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 214,
                      "end": 223,
                      "argument": {
                        "type": "Literal",
                        "start": 221,
                        "end": 223,
                        "value": "",
                        "raw": "\"\""
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "kind": "get",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 237,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 244,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 245,
        "end": 287,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 285,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 260,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 260,
              "end": 285,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 263,
                "end": 285,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 269,
                    "end": 281,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 269,
                      "end": 280,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 269,
                        "end": 276,
                        "object": {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 274,
                          "end": 276,
                          "name": "z"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 279,
                        "end": 280,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
