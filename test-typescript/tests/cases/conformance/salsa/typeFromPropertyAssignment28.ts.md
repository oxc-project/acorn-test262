__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 380,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 89,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 87,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 69,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 87,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 72,
                "end": 87,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 74,
                    "end": 85,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 74,
                      "end": 84,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 74,
                        "end": 80,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 74,
                          "end": 78
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 80,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 83,
                        "end": 84,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
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
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 353,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 352,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 330,
          "end": 341,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 330,
            "end": 331,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 332,
            "end": 341,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 344,
          "end": 352,
          "properties": [
            {
              "type": "Property",
              "start": 346,
              "end": 350,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 346,
                "end": 347,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 349,
                "end": 350,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 372,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 365,
            "end": 372,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 373,
      "end": 376,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 373,
        "end": 376,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 373,
          "end": 374,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 375,
          "end": 376,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 377,
      "end": 380,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 377,
        "end": 380,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 377,
          "end": 378,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 379,
          "end": 380,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
