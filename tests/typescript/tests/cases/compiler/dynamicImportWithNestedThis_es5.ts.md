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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 67,
            "end": 93,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 80,
              "decorators": [],
              "name": "_path",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 83,
              "end": 92,
              "value": "./other",
              "raw": "'./other'"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 139,
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
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 139,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "_path",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "options": null,
                      "phase": null
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
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 161,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 160,
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
            "callee": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 171,
            "decorators": [],
            "name": "dynamic",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
