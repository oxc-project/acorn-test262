recursiveBaseConstructorCreation2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "decorators": [],
        "name": "base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 70,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 70,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 59,
            "end": 68,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 67,
                  "decorators": [],
                  "name": "xyz",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "abc",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 49,
        "end": 53,
        "decorators": [],
        "name": "base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 104,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
        "decorators": [],
        "name": "xyz",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "decorators": [],
        "name": "abc",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 126,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 114,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 117,
            "end": 126,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "decorators": [],
              "name": "xyz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
