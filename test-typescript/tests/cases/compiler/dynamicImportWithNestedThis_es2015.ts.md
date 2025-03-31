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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 67,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 80,
              "name": "_path",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 83,
              "end": 92,
              "value": "./other",
              "raw": "'./other'"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 139,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 103,
              "name": "dynamic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 139,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "source": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 134,
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 134,
                          "name": "_path",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "options": null
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
      "type": "VariableDeclaration",
      "start": 143,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 153,
            "end": 160,
            "callee": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 174,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 173,
        "callee": {
          "type": "MemberExpression",
          "start": 162,
          "end": 171,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 171,
            "name": "dynamic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
