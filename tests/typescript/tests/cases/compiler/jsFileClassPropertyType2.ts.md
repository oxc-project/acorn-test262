__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 83,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 81,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
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
              "start": 25,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 81,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 65,
                    "end": 77,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 65,
                      "end": 76,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 65,
                        "end": 71,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 65,
                          "end": 69
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 74,
                        "end": 76,
                        "elements": []
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 27,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 26,
        "arguments": [
          {
            "type": "Literal",
            "start": 17,
            "end": 25,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 16,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 11,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 1,
              "end": 8,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 12,
            "end": 16,
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
