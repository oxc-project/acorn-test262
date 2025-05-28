__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 33,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "stat",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 32,
              "value": 10,
              "raw": "10"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 38,
            "end": 50,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 44,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 47,
              "end": 49,
              "value": 10,
              "raw": "10"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 81,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 80,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 54,
          "end": 68,
          "object": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 61,
            "end": 68,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "NewExpression",
          "start": 71,
          "end": 80,
          "callee": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 114,
      "expression": {
        "type": "AssignmentExpression",
        "start": 83,
        "end": 113,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 83,
          "end": 108,
          "object": {
            "type": "MemberExpression",
            "start": 83,
            "end": 97,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 89,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 90,
              "end": 97,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 98,
            "end": 108,
            "decorators": [],
            "name": "additional",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 111,
          "end": 113,
          "value": 20,
          "raw": "20"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
