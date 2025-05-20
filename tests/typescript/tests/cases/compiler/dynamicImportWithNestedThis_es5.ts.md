__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 174,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 141,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 67,
            "end": 93,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 80,
              "decorators": [],
              "name": "_path",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 83,
              "end": 92,
              "raw": "'./other'",
              "value": "./other"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 139,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 103,
              "decorators": [],
              "name": "dynamic",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 139,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 139,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 110,
                    "end": 136,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 117,
                      "end": 135,
                      "options": null,
                      "source": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 134,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 134,
                          "decorators": [],
                          "name": "_path",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
        "start": 62,
        "end": 63,
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
      "type": "VariableDeclaration",
      "start": 143,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 153,
            "end": 160,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
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
      "start": 162,
      "end": 174,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 173,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 162,
          "end": 171,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 171,
            "decorators": [],
            "name": "dynamic",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
