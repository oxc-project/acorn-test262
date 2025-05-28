__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 41,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 39,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 21,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 39,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 24,
                "end": 39,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 26,
                    "end": 37,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 26,
                      "end": 36,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 26,
                        "end": 32,
                        "object": {
                          "type": "ThisExpression",
                          "start": 26,
                          "end": 30
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 31,
                          "end": 32,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 35,
                        "end": 36,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
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
      "type": "ClassDeclaration",
      "start": 62,
      "end": 112,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 112,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 76,
            "end": 110,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 110,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 110,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 90,
                    "end": 104,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 97,
                      "end": 103,
                      "object": {
                        "type": "ThisExpression",
                        "start": 97,
                        "end": 101
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
